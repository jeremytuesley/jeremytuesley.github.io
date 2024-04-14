import { useEffect, useState } from 'react';

const WordConfig = [
  'Javascript',
  'React JS',
  'TypeScript',
  'Ruby',
  'Rails',
  'Efficiency',
  'Care',
  'Teamwork',
  'Git',
];

const TextAnimation = () => {
  const [currentWord, setCurrentWord] = useState({
    content: '', // the displaying letters
    index: 0, // index of WordConfig
    flow: true, // going forword = true, backward = false
    timer: 0, // a countdown for extra waiting time
  });

  const anime = async () => {
    setCurrentWord((prev) => {
      let { content, index, flow, timer } = prev;
      if (timer > 0) {
        timer = timer - 1;
        return { content, index, flow, timer };
      }
      if (flow) {
        content = WordConfig[index].slice(0, content.length + 1);
        if (content.length === WordConfig[index].length) {
          flow = false;
          timer = 5;
        }
      } else {
        content = WordConfig[index].slice(0, content.length - 1);
        if (content.length === 0) {
          if (index !== WordConfig.length - 1) {
            index = index + 1;
          } else {
            index = 0;
          }
          flow = true;
          timer = 5;
        }
      }
      return { content, index, flow, timer };
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => anime(), 100);
    return () => clearInterval(intervalId);
  }, []);

  return currentWord.content;
};

export default TextAnimation;
