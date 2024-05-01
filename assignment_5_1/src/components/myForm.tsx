'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { 
        TextField, 
        Box, 
        Button,
        SelectChangeEvent, 
        FormControl, 
        InputLabel, 
        Select, 
        MenuItem,
        Rating
        } from '@mui/material';


export default function MyForm(props: {addEntry: Function}){
    // Add prop for addEntry: Function
    const languages = ['Python', 'Java', 'TypeScript', 'C++'];
    const [name, setName] = useState<string>("");
    const [language, setLanguage] = useState<string>(languages[0]);
    const [comment, setComment] = useState<string>("");
    const [rating, setRating] = useState<number>(0);

    function handleRatingChange(event: React.SyntheticEvent, value: number | null){
        setRating(value ? value : 0);
        
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    function handleLanguageChange(event: SelectChangeEvent){
        setLanguage(event.target.value);
    }

    function handleCommentChange(event: ChangeEvent<HTMLInputElement>){
        setComment(event.target.value);
    }

    function handleClick(event: React.MouseEvent<HTMLElement>){

        // call props.addEntry to add the current name, language, and comment to your entries.
        props.addEntry({
            name: name,
            language: language,
            comment: comment,
            rating: rating
        });
        // setName("");
        // setLanguage(languages[0]);
        // setComment("");
    }

    // useEffect(()=>{
    //     console.log(name);
    //     console.log(language);
    //     console.log(comment);
    //     console.log('--------------------------')

    // }, [name, language, comment]);

    return(
        <Box alignItems={"center"} display={"flex"}>
            <TextField
            id="name-text"
            label="Enter your Name"
            value={name}
            onChange={handleNameChange}
            />
        <FormControl fullWidth>
            <InputLabel id="language-label">
                Select a Language
            </InputLabel>
            <Select id="language-select" labelId='language-label' onChange={handleLanguageChange} value={language}>
                {
                    languages.map((language: string, i: number)=>(
                        <MenuItem value={language} key={i}>
                            {language}
                        </MenuItem>
                    ))
                }
            </Select>
            </FormControl>

                <TextField
                multiline
                rows={5}
                id="comment-text"
                label="Comments?"
                value={comment}
                onChange={handleCommentChange}
                />
                <Rating
                    name="rating"
                    value={rating}
                    onChange={handleRatingChange}
                    />
            <Button  id="testId" value="testValue" variant="contained" onClick={handleClick}>
                Submit
            </Button>
        </Box>

    )
    
}