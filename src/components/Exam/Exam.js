import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import SingleQuestionWithAnswers from './SingleQuestionWithAnswers';
import { submitExam } from './submitExamHandler';
import { useSelector } from 'react-redux';
import { getExampaperOrResultsheet } from '../../actions/getExamSheetAction';
import {useHistory} from 'react-router-dom';
import { MY_BACKEND } from '../../global';


const Exam = () => {
    const user = useSelector(state => state?.user?.email);
    const examname = "common_mcq_quiz";
    const cls = useStyles();
    const [exam, setExam] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const examPath = `http://localhost:5000/exam/${examname}/${user}`;
    const examPath = `${MY_BACKEND}/exam/${examname}/${user}`;
    const history = useHistory();


    useEffect(() => {
        getExampaperOrResultsheet(examPath, (err, result) => {
            if(err){
                console.log(err)
            }else{
                setExam(result.data);
                setIsSubmitted(result.data.isSubmitted);
            }
        });

    }, [examPath,setExam]);


   

    const modify = async (question_id, answer_id) => {
        const newExam = {
            isAllSelected: false,
            timeOfSubmitting: new Date().toLocaleString(),
            examName: exam.examName,
            examData: exam.examData,
            totalMarks: exam.totalMarks,
            userMarks: exam.userMarks,
            user: user,
            isSubmitted: true
        };

        // remove all options
        newExam.examData.forEach(eachSingleQuestionObject => {
            (eachSingleQuestionObject.question_id === question_id) &&
                (eachSingleQuestionObject.answers.forEach((eachSingleAnswerObject) => eachSingleAnswerObject.status = null));
        })


        // select a particular option
        newExam.examData.forEach(eachSingleQuestionObject => {
            (eachSingleQuestionObject.question_id === question_id) && (eachSingleQuestionObject.answers[answer_id].status = 'selected');
        });
        newExam.examData.forEach(eachSingleQuestionObject => {
            (eachSingleQuestionObject.question_id === question_id) && (eachSingleQuestionObject.isSelected = true);
        });

        //check if all question is answered    
        const isAllSelected = await newExam.examData.every(eachSingleQuestionObject => eachSingleQuestionObject.isSelected === true);
        (isAllSelected) && (newExam['isAllSelected'] = true);

        // set marks for selected questions
        newExam.examData.forEach(eachSingleQuestionObject => {
            if (eachSingleQuestionObject.question_id === question_id) {
                const answer = eachSingleQuestionObject.answers[answer_id];
                (answer.status === 'selected' && answer.isSpecial) && (eachSingleQuestionObject.marks = 10);
                (answer.status === 'selected' && answer.isNormal) && (eachSingleQuestionObject.marks = 0);
            }
        });


        // findout the user's total marks
        const total = newExam.examData.reduce((tot, curr) => { return tot = tot + curr.marks }, 0);
        newExam.userMarks = total;
        // set exam
        setExam(newExam);
    }

    // submit exam
    // const url = `http://localhost:5000/exam/${examname}/${user}`;
    const url = `${MY_BACKEND}/exam/${examname}/${user}`;
    const handleSubmit = () => {
        
        (!isSubmitted && exam.isAllSelected) &&
            (submitExam(url, exam, (res) => { if (res.isExamSubmitted) setExam(res.data); setIsSubmitted(true); }));
    }

    const handleShowResult = () => {
        console.log('show result');
        history.push('/exam/result');
    }

   

    return (
        <Container className={cls.root}>
            {exam && (
                <div className={cls.rootTitle}>
                    <p className={cls.title}>{exam?.examName}</p>
                    <div className={cls.marksTimes}>
                        <div className={cls.time}>Total Time: <span>{exam.totalTime}</span></div>
                        <div className={cls.time}>Total Marks: <span>{exam.totalMarks}</span></div>
                    </div>
                </div>
            )
            }
            <Grid container jsutify="center">
                {exam && (
                    exam?.examData?.map(res => <SingleQuestionWithAnswers
                        key={res.question_id}
                        question_id={res.question_id}
                        question={res.question}
                        array_of_answers={res.answers}
                        modify={modify}
                        exam={exam}
                        isSubmitted={isSubmitted}
                    />
                    )
                )}
                <Grid item xs={12}>
                    {exam && <Button
                        variant="outlined"
                        className={cls.button}
                        onClick={isSubmitted ? handleShowResult : handleSubmit}
                    >
                        {isSubmitted ? 'See Total Marks' : 'Finish Exam'}
                    </Button>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Exam;