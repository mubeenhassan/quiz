import { ITEM_TYPES } from "./Types"
const { PH, EN, EM, VI, AU, KI } = ITEM_TYPES
export const QUIZ = [
  {
    question:
      "When you think of the abuser and your connection to them where in your body do you feel it",
    options: [
      {
        name: "Head",
        credit: [
          {
            points: 2,
            to: EM,
          },
        ],
      },
      {
        name: "Throat",
        credit: [
          {
            points: 2,
            to: EM,
          },
        ],
      },
      {
        name: "Chest",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "Upper Abdomen",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "Lower Abdomen",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "None",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
    ],
  },
  {
    question:
      "When you give someone directions to your house, what are you most likely to tell them?",
    options: [
      {
        name: "A description of building/landmarks they will pass",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "The names of the roads or streets they will be on",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Follow me—it will be easier if I just show you how to get there.",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question:
      "Indicate how happy you feel when with your children/friends (non-toxic)",
    options: [
      {
        name: "1-3",
        credit: [
          {
            points: 4,
            to: PH,
          },
        ],
      },
      {
        name: "4-5",
        credit: [
          {
            points: 3,
            to: PH,
          },
        ],
      },
      {
        name: "6-7",
        credit: [
          {
            points: 4,
            to: EN,
          },
        ],
      },
      {
        name: "8-10",
        credit: [
          {
            points: 4,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "Do you crave love and affection from the abuser?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: EN,
          },
          {
            points: 1,
            to: EM,
          },
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
    ],
  },
  {
    question: "When you are angry, what are you most likely to do?",
    options: [
      {
        name: 'Put on your "mad" face',
        credit: [
          {
            points: 3,
            to: VI,
          },
        ],
      },
      {
        name: "Yell and scream",
        credit: [
          {
            points: 3,
            to: AU,
          },
        ],
      },
      {
        name: "Slam doors",
        credit: [
          {
            points: 3,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "Of these three classes at school, which was your favorite?",
    options: [
      {
        name: "Art class",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Music class",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Gym class",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "Which of these phrases describes how you feel right now",
    question_type: "multiple",
    options: [
      {
        name: "Out of control",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Self-loathing",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Hopeless",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Isolated",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Lost",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Stuck",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
      {
        name: "Numb",
        credit: [
          {
            points: 1,
            to: EM,
          },
        ],
      },
      {
        name: "Depressed",
        credit: [
          {
            points: 1,
            to: EM,
          },
        ],
      },
      {
        name: "Happy",
        credit: [],
      },
      {
        name: "Content",
        credit: [],
      },
      {
        name: "Empowered",
        credit: [],
      },
      {
        name: "Confused",
        credit: [
          {
            points: 1,
            to: EM,
          },
        ],
      },
      {
        name: "Betrayed",
        credit: [
          {
            points: 1,
            to: EM,
          },
        ],
      },
      {
        name: "Unworthy",
        credit: [
          {
            points: 1,
            to: EM,
          },
        ],
      },
      {
        name: "Dissociated",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
      {
        name: "unrooted or detached",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
      {
        name: "Drained",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
      {
        name: "Imbalanced",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
      {
        name: "None",
        credit: [],
      },
    ],
  },
  {
    question:
      "Do you feel like your friends and family don't want to hear about your relationship/experience of abuse?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 1,
            to: EN,
          },
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 2,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "Do you feel like there is no way out of the relationship?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: EM,
          },
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
    ],
  },
  {
    question:
      "Have you increased how much you engage in any of these behaviours",
      question_type: "multiple",
    options: [
      {
        name: "Drinking Alcohol",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Smoking",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Eating Unhealthy Foods",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Taking Prescription Drugs (not SSRIs)",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Taking Recreational Drugs",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "ddShoppingd",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Gambling",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Gossiping",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Watching Pornography",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Self Harm",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Mindless Scrolling on your phone",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Playing Video Games",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Obsessive Compulsive Behaviours",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "None",
        credit: [
          {
            points: 6,
            to: EN,
          },
          {
            points: 6,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "When you hear a song on the radio, what are you most likely to do?",
    options: [
      {
        name: "Picture the video that goes along with it",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Sing or hum along with the music",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Start dancing or tapping your foot",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      }
    ],
  },
  {
    question: "Have you ever used any of these phrases to describe the abuser?",
    question_type: "multiple",
    options: [
      {
        name: "Soul Mate",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "Twin Flame",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "Karmic Partner",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "Kindred Spirit",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "None",
        credit: [
          {
            points: 2,
            to: EM,
          },
          {
            points: 2,
            to: PH,
          }
        ],
      }
    ],
  },
  {
    question: "Do you feel responsible for the abuse you experienced?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 4,
            to: EM,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      }
    ],
  },
  {
    question: "What do you find most distracting when concentrating?",
    options: [
      {
        name: "Lights that are too bright or too dim",
        credit: [
          {
            points: 3,
            to: VI,
          },
        ],
      },
      {
        name: "Noises from the hallway or outside",
        credit: [
          {
            points: 3,
            to: AU,
          },
        ],
      },
      {
        name: "The temperature being too hot or too cold",
        credit: [
          {
            points: 3,
            to: KI,
          },
        ],
      }
    ],
  },
  {
    question: "Do you have or have you ever had an addiction?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: EN,
          },
          {
            points: 1,
            to: EM,
          },
        ],
      }
    ],
  },
  {
    question: "Do you believe that God/Divine Being/Creator is keeping the abuser in your life.",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 4,
            to: EN,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 2,
            to: EM,
          },
          {
            points: 2,
            to: PH,
          },
        ],
      }
    ],
  },
  {
    question: "Indicate how happy you feel when you are working/running the household",
    options: [
      {
        name: "1-3",
        credit: [
          {
            points: 4,
            to: PH,
          },
        ],
      },
      {
        name: "4-7",
        credit: [
          {
            points: 4,
            to: EN,
          },
        ],
      },
      {
        name: "8-10",
        credit: [
          {
            points: 4,
            to: EM,
          },
        ],
      }
    ],
  },
  {
    question: "Would you describe sex with the abuser as 'Out of this world'?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: EM,
          },
          {
            points: 1,
            to: PH,
          },
        ],
      }
    ],
  },
  {
    question: "When you are happy, what are you most likely to do?",
    options: [
      {
        name: "Smile from ear to ear",
        credit: [
          {
            points: 3,
            to: VI,
          },
        ],
      },
      {
        name: "Talk up a storm",
        credit: [
          {
            points: 3,
            to: AU,
          },
        ],
      },
      {
        name: "Act really hyper",
        credit: [
          {
            points: 3,
            to: KI,
          },
        ],
      }
    ],
  },
  {
    question: "What do you like to do to relax?",
    options: [
      {
        name: "Read",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Listen to music",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Exercise (walk, run, play sports, etc.)",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      }
    ],
  },
  {
    question: "How many times have you broken up with and gone back to the abuser?",
    options: [
      {
        name: "1-5",
        credit: [
          {
            points: 3,
            to: EM,
          },
        ],
      },
      {
        name: "6-10",
        credit: [
          {
            points: 3,
            to: EM,
          },
        ],
      },
      {
        name: "11-20",
        credit: [
          {
            points: 3,
            to: PH,
          },
        ],
      },
      {
        name: "20+",
        credit: [
          {
            points: 4,
            to: PH,
          },
        ],
      }
    ],
  },
  {
    question: "What's the best way for you to learn about how something works?",
    options: [
      {
        name: "Get someone to show you",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Read about it or listen to someone explain it",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Figure it out on your own",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "Do you feel like you 'attract' toxic people?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: PH,
          },
          {
            points: 1,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "If you won a game, which of these three prizes would you choose?",
    options: [
      {
        name: "A print for the wall",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "A music CD or mp3 download",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "A game of some kind",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "On a scale of 1-10 how detached from reality do you feel at the moment?",
    options: [
      {
        name: "1-3",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "4-6",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "7-10",
        credit: [
          {
            points: 6,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "Do you seek the abusers approval?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: EM,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
    ],
  },
  {
    question: "When in a new place, how do you find your way around?",
    options: [
      {
        name: "Look for a map or directory",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Ask someone for directions",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Walk around until you find what you're looking for",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "On a scale of 1-10 how much do you believe that the abuser is the person they were at the start of the relationship deep down?",
    options: [
      {
        name: "1-3",
        credit: [
          {
            points: 4,
            to: PH,
          },
        ],
      },
      {
        name: "4-6",
        credit: [
          {
            points: 4,
            to: EN,
          },
        ],
      },
      {
        name: "7-10",
        credit: [
          {
            points: 6,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "Which would you rather go to with a group of friends?",
    options: [
      {
        name: "A movie",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "A concert",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "An amusement park",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "How has your weight changed in the last 6 months?",
    options: [
      {
        name: "Put on weight",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Lost weight",
        credit: [
          {
            points: 2,
            to: PH,
          },
        ],
      },
      {
        name: "Weight has stayed the same",
        credit: [
          {
            points: 1,
            to: EN,
          },
          {
            points: 1,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "What are you most likely to remember about new people you meet?",
    options: [
      {
        name: "Their face but not their name",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Their name but not their face",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "What you talked about with them",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "During the relationship did/do you experience moments where one of you has read the others mind or you feel like you have received a message telepathically?",
    options: [
      {
        name: "Never",
        credit: [
          {
            points: 2,
            to: PH,
          },
          {
            points: 2,
            to: EM,
          },
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "All the Time",
        credit: [
          {
            points:4,
            to: EN,
          },
        ],
      },
    ],
  },
  {
    question: "Do you find yourself walking on eggshells when it comes to the abuser?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: EM,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
    ],
  },
  {
    question: "How much do you agree with the statement 'the abuser is the only one who can ease the pain right now'",
    options: [
      {
        name: "Stongly Agree",
        credit: [
          {
            points: 4,
            to: EM,
          },
        ],
      },
      {
        name: "Agree",
        credit: [
          {
            points: 2,
            to: EM,
          },
        ],
      },
      {
        name: "Neutral",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
      {
        name: "Disagree",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
      {
        name: "Strongly Disagree",
        credit: [
          {
            points: 1,
            to: EN,
          },
          {
            points: 1,
            to: PH,
          },
        ],
      },
    ],
  },
  {
    question: "Do you feel as though you are grieving?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 4,
            to: EM,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: PH,
          }
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 1,
            to: EN,
          }
        ],
      },
    ],
  },
  {
    question: "Would you describe the abuser as draining you of energy?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: EN,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: PH,
          },
          {
            points: 1,
            to: EM,
          },
        ],
      },
    ],
  },
  {
    question: "What kind of book would you like to read for fun?",
    options: [
      {
        name: "A book with lots of pictures in it",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "A book with lots of words in it",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "A book with word searches or crossword puzzles",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "When you are not sure how to spell a word, what are you most likely to do?",
    options: [
      {
        name: "Write it down to see if it looks right",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Spell it out loud to see if it sounds right",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Trace the letters in the air (finger spelling)",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: 'When you see the word "cat," what do you do first?',
    options: [
      {
        name: "Picture a cat in your mind",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: 'Say the word "cat" to yourself',
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Think about being with a cat (petting it or hearing it)",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "Do you find yourself making excuses or minimising the abuse you experience(d) to friends and family?",
    options: [
      {
        name: "Yes",
        credit: [
          {
            points: 2,
            to: EM,
          },
        ],
      },
      {
        name: "No",
        credit: [
          {
            points: 1,
            to: EN,
          },
        ],
      },
      {
        name: "Sometimes",
        credit: [
          {
            points: 1,
            to: PH,
          },
        ],
      },
    ],
  },
  {
    question: "What's the best way for you to study for a test?",
    options: [
      {
        name: "Read the book or your notes and review charts",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Have someone ask you questions",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Make up index cards that you can review",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "If you went to a PARTY, what would you be most likely to remember the next day?",
    options: [
      {
        name: "The faces of the people who were there",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "The music that was played",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "The dance moves you did and the food you ate",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "What do you find most distracting when you are trying to concentrate?",
    options: [
      {
        name: "People walking past you",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Loud noises",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "An uncomfortable chair",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "You're out shopping for clothes, and you're waiting in line to pay. What are you most likely to do while you are waiting? ",
    options: [
      {
        name: "Look around at other clothes on the racks",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Talk to the person next to you in line",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Fidget or move back and forth",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
  {
    question: "What is the best way for you to remember a friend's phone number?",
    options: [
      {
        name: "Picture the numbers on the phone",
        credit: [
          {
            points: 1,
            to: VI,
          },
        ],
      },
      {
        name: "Say it out loud over and over and over",
        credit: [
          {
            points: 1,
            to: AU,
          },
        ],
      },
      {
        name: "Write it down or store it in your phone contact list",
        credit: [
          {
            points: 1,
            to: KI,
          },
        ],
      },
    ],
  },
]
