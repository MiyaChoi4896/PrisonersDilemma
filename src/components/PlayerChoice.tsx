"use client";

import { useState, useEffect } from "react";
type Choice = "Not selected" | "Confess" | "Don't confess";
type RoundResult = {
    round: number;
    playerChoice: Choice;
    opponentChoice: Choice;
    playerYears: number;
    opponentYears: number;
};

export default function PlayerChoice() {
    const [playerChoice, setPlayerChoice] = useState<Choice>("Confess");
    const [opponentChoice, setOpponentChoice] = useState<Choice>("Not selected");
    const [round, setRound] = useState(1);
    const [timeLeft, setTimeLeft] = useState(3);
    const [roundHistory, setRoundHistory] = useState<RoundResult[]>([]);
    const result = getResult(playerChoice, opponentChoice);

    function handleConfess() {
        setPlayerChoice("Confess");
    }

    function handleDontConfess() {
        setPlayerChoice("Don't confess");
    }

    function getButtonClass(playerChoice: Choice, choice: Choice) {
        if (playerChoice === choice) {
            return "bg-blue-200 border px-4 py-2";
        }

        return "border px-4 py-2";
    }

    function getOpponentChoice(): Choice {
        if (Math.random() < 0.5) {
            return "Confess";
        }

        return "Don't confess";
    }

    function getResult(playerChoice: Choice, opponentChoice: Choice) {
        if (playerChoice === "Confess" && opponentChoice === "Confess") {
            return {
                playerYears: 2,
                opponentYears: 2,
            };
        }
        if (playerChoice === "Don't confess" && opponentChoice === "Don't confess") {
            return {
                playerYears: 1,
                opponentYears: 1,
            };
        }
        if (playerChoice === "Confess" && opponentChoice === "Don't confess") {
            return {
                playerYears: 0,
                opponentYears: 4,
            };
        }
        if (playerChoice === "Don't confess" && opponentChoice === "Confess") {
            return {
                playerYears: 4,
                opponentYears: 0,
            };
        }
    }

    function getResultMessage(playerChoice: Choice, opponentChoice: Choice) {
        if (playerChoice === "Confess" && opponentChoice === "Confess") {
            return "You both confessed.";
        }
        if (playerChoice === "Don't confess" && opponentChoice === "Don't confess") {
            return "You both didn't confess.";
        }
        if (playerChoice === "Confess" && opponentChoice === "Don't confess") {
            return "You confessed, but opponent didn't.";
        }
        if (playerChoice === "Don't confess" && opponentChoice === "Confess") {
            return "You didn't confess, but opponent confessed.";
        }
        return "...";
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((currentTime) => { //functional updater
                if (currentTime === 0) {
                    setOpponentChoice(getOpponentChoice());
                    if (result) {
                        setRoundHistory((currentHistory) => {
                            return [
                                ...currentHistory,
                                {
                                    round,
                                    playerChoice,
                                    opponentChoice,
                                    playerYears: result.playerYears,
                                    opponentYears: result.opponentYears
                                }
                            ];
                        });
                    }
                    clearInterval(timer);
                    return 0;
                }
                return currentTime - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <div>
            <br></br>
            <p>Round: {round}</p>
            <p>{timeLeft === 0 ? "Time's up!" : `Time left: ${timeLeft}`}</p>
            <button
                className={getButtonClass(playerChoice, "Confess")}
                onClick={handleConfess}
                disabled={timeLeft === 0}
            >
                Confess
            </button>

            <button
                className={getButtonClass(playerChoice, "Don't confess")}
                onClick={handleDontConfess}
                disabled={timeLeft === 0}
            >
                Don't confess
            </button>


            <p>Your choice: {playerChoice}</p>
            <p>Opponent choice: {opponentChoice}</p>
            <br />
            <p>{getResultMessage(playerChoice, opponentChoice)}</p>
            <br />
            <p>Player's years: {result && result.playerYears}</p>
            <p>Opponent's years: {result && result.opponentYears}</p>
        </div>
    );
}