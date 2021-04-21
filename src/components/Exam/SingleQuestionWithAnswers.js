import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { Check as CheckIcon, Clear as ClearIcon } from '@material-ui/icons';

const SingleQuestionWithAnswers = ({ question_id, question, array_of_answers, modify, isSubmitted }) => {
    const cls = useStyles();
    const handleSelectOneOption = (question_id, answer_id) => {
        !isSubmitted && modify(question_id, answer_id);
    }

    const unsubmitted = (res) => {
        if (res.answer_type === 'text') { return (res.status === 'selected') ? `${cls.selectedText}` : `${cls.optionText}` };
        if (res.answer_type === 'image') { return (res.status === 'selected') ? `${cls.selectedImage}` : `${cls.optionImage}` };
    };

    const submitted = (option) => {
        if (option.answer_type === 'text') {
            return (option.isSpecial) ? `${cls.rightAnswer}` : (option.status === 'selected') ? (`${cls.wrongAnswer}`) : (`${cls.normalAnswer}`)
        };
        if (option.answer_type === 'image') {
            return (option.isSpecial) ? `${cls.rightImage}` : (option.status === 'selected') ? (`${cls.wrongImage}`) : (`${cls.normalImage}`)
        };
    };

    const resultIconForSubmittedExam = (option) => {
        return (option.isSpecial) ? `${cls.checkIcon}` : ((option.status === 'selected') ? (`${cls.clearIcon}`) : (`${cls.noIcon}`));
    }
    const resultIconForUnubmittedExam = (option) => {
        return ((option.status === 'selected') ? (`${cls.checkIcon}`) : (`${cls.noIcon}`));
    }


    return (
        <Grid item sm={12}>
            <div className={cls.singleQuestion}>
                <p className={cls.question}>{question}</p>
                <div>
                    {
                        array_of_answers.map((option) => (
                            <div key={option.answer_id} className={cls.checkAndOptionContainer} >

                                <div className={isSubmitted ? resultIconForSubmittedExam(option) : resultIconForUnubmittedExam(option)}>
                                    {(!isSubmitted && (option.status === 'selected')) && <CheckIcon />}
                                    {(isSubmitted && (option.isSpecial)) && <CheckIcon />}
                                    {(isSubmitted && (option.isNormal) && (option.status === 'selected')) && <ClearIcon />}
                                </div>

                                <div
                                    className={isSubmitted ? submitted(option) : unsubmitted(option)}
                                    onClick={() => handleSelectOneOption(question_id, option.answer_id)}
                                    >
                                    {
                                        (option.answer_type === 'image') &&
                                        <img src={option.value} alt='nothing' className={cls.image} />
                                    }
                                    {
                                        (option.answer_type === 'text') &&
                                        <span>{option.value}</span>
                                    }
                                </div>

                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </Grid>
    );
};

export default SingleQuestionWithAnswers;