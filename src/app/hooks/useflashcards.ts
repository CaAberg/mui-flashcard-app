"use client";

import { useState, useEffect } from "react";

interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

const useFlashcards = (key: string) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedFlashcards = localStorage.getItem(key);
        if (storedFlashcards) {
          setFlashcards(JSON.parse(storedFlashcards));
        }
      } catch (error) {
        console.error("Failed to parse flashcards from localStorage:", error);
      }
    }
  }, [key]);
  

  const addFlashcard = (newFlashcard: Flashcard) => {
    setFlashcards((prev) => {
      const updatedFlashcards = [...prev, newFlashcard];
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(updatedFlashcards));
      }
      return updatedFlashcards;
    });
  };

  const deleteFlashcard = (id: string) => {
    setFlashcards((prev) => {
      const updatedFlashcards = prev.filter((card) => card.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(updatedFlashcards));
      }
      return updatedFlashcards;
    });
  };

  const clearFlashcards = () => {
    setFlashcards([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  return { flashcards, addFlashcard, deleteFlashcard, clearFlashcards };
};

export default useFlashcards;

