"use client";

import React, { useState } from "react";
import useFlashcards from "@/app/hooks/useflashcards";
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const FlashcardApp: React.FC = () => {
  const { flashcards, addFlashcard, deleteFlashcard, clearFlashcards } =
    useFlashcards("flashcards");

  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleAddFlashcard = () => {
    if (question && answer) {
      addFlashcard({
        id: `${question}-${answer}`.replace(/\s+/g, "-").toLowerCase(),
        question,
        answer,
      });
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <Container>
      <Box component="form" display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TextField
          label="Answer"
          variant="outlined"
          fullWidth
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddFlashcard}
          >
            Add Flashcard
          </Button>
          <Button variant="outlined" color="secondary" onClick={clearFlashcards}>
            Clear All
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={2} marginTop={4}>
        {flashcards.map((card) => (
          <Card
            key={card.id}
            sx={{ width: "300px", padding: 2, display: "flex", flexDirection: "column" }}
          >
            <CardContent>
              <Typography variant="h6">{card.question}</Typography>
              <Typography>{card.answer}</Typography>
            </CardContent>
            <Button
              color="error"
              onClick={() => deleteFlashcard(card.id)}
              sx={{ alignSelf: "flex-end" }}
            >
              Delete
            </Button>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default FlashcardApp;