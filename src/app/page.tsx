'use client';
import React, { useState } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';

// TypeScript 인터페이스 추가
interface Option {
  text: string;
  type: string;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Result {
  language: string;
  description: string;
  traits: string[];
  recommended: string[];
}

interface PersonalityTypes {
  [key: string]: Result;
}

const questions: Question[] = [
  {
    id: 1,
    text: "프로젝트를 시작할 때 당신은...",
    options: [
      { text: "상세한 설계 문서를 먼저 작성한다", type: "Structured" },
      { text: "프로토타입을 빠르게 만들어본다", type: "Dynamic" }
    ]
  },
  {
    id: 2,
    text: "버그를 발견했을 때 당신은...",
    options: [
      { text: "로그와 디버거를 통해 체계적으로 추적한다", type: "Static" },
      { text: "직감적으로 문제를 파악하고 코드를 수정해본다", type: "Dynamic" }
    ]
  },
  {
    id: 3,
    text: "코드 스타일은...",
    options: [
      { text: "정해진 컨벤션을 철저히 지킨다", type: "Static" },
      { text: "읽기 편하다면 자유롭게 작성한다", type: "Dynamic" }
    ]
  },
  {
    id: 4,
    text: "새로운 기술을 배울 때...",
    options: [
      { text: "깊이 있게 원리부터 이해한다", type: "Structured" },
      { text: "필요한 부분부터 빠르게 적용해본다", type: "Dynamic" }
    ]
  },
  {
    id: 5,
    text: "팀 프로젝트에서 당신은...",
    options: [
      { text: "체계적인 역할 분담과 일정 관리를 선호한다", type: "Structured" },
      { text: "유연한 협업과 즉각적인 피드백을 선호한다", type: "Dynamic" }
    ]
  },
  {
    id: 6,
    text: "에러 처리는...",
    options: [
      { text: "모든 예외 상황을 미리 처리한다", type: "Static" },
      { text: "발생할 때마다 대응한다", type: "Dynamic" }
    ]
  },
  {
    id: 7,
    text: "리팩토링할 때...",
    options: [
      { text: "완벽한 설계를 위해 전체적으로 수정한다", type: "Structured" },
      { text: "필요한 부분만 점진적으로 개선한다", type: "Dynamic" }
    ]
  },
  {
    id: 8,
    text: "코드 작성 시...",
    options: [
      { text: "타입과 인터페이스를 먼저 정의한다", type: "Static" },
      { text: "구현을 먼저 하고 나중에 타입을 추가한다", type: "Dynamic" }
    ]
  },
  {
    id: 9,
    text: "최적화는...",
    options: [
      { text: "처음부터 성능을 고려하여 설계한다", type: "Structured" },
      { text: "필요할 때 프로파일링 후 개선한다", type: "Dynamic" }
    ]
  },
  {
    id: 10,
    text: "새로운 기능 개발 시...",
    options: [
      { text: "문서화부터 차근차근 진행한다", type: "Static" },
      { text: "실험적으로 구현해보고 문서화한다", type: "Dynamic" }
    ]
  }
];

const personalityTypes: PersonalityTypes = {
  "Structured-Static": {
    language: "Java/TypeScript",
    description: "당신은 체계적이고 안정적인 개발을 선호하는 개발자입니다. 정적 타입 언어와 탄탄한 아키텍처를 좋아하며, 철저한 계획과 문서화를 중요시합니다.",
    traits: ["체계적인", "신중한", "안정성 추구", "계획적인", "문서화 중시"],
    recommended: ["Spring Boot", "Angular", "C#"]
  },
  "Structured-Dynamic": {
    language: "Python",
    description: "구조적이면서도 실용적인 접근을 선호하는 개발자입니다. 깔끔한 설계와 유연성의 균형을 잘 맞출 수 있으며, 효율적인 문제 해결을 잘합니다.",
    traits: ["논리적인", "실용적인", "균형잡힌", "효율적인", "적응력 있는"],
    recommended: ["Django", "FastAPI", "Ruby on Rails"]
  },
  "Dynamic-Static": {
    language: "Rust/Kotlin",
    description: "혁신적이면서도 안정성을 중요시하는 개발자입니다. 새로운 기술을 받아들이는데 거리낌이 없으면서도, 견고한 시스템 구축을 중요하게 생각합니다.",
    traits: ["혁신적인", "성능중심적인", "탐구적인", "분석적인", "세심한"],
    recommended: ["Rust", "Kotlin", "Go"]
  },
  "Dynamic-Dynamic": {
    language: "JavaScript",
    description: "자유롭고 창의적인 개발을 즐기는 개발자입니다. 빠른 프로토타이핑과 실험적인 접근을 선호하며, 새로운 도전을 즐깁니다.",
    traits: ["창의적인", "실험적인", "유연한", "빠른 학습", "도전적인"],
    recommended: ["Node.js", "React", "Vue.js"]
  }
};

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<Result | null>(null);

  const ResultSection = ({ result }: { result: Result }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-indigo-600">
        당신의 프로그래밍 성향은...
      </h2>
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {result.language} 개발자 타입
        </h3>
        <p className="text-gray-600">
          {result.description}
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">주요 특성</h4>
          <div className="flex flex-wrap gap-2">
            {result.traits.map((trait, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {trait}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">추천 기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            {result.recommended.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={resetTest}
        className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
        다시 테스트하기
      </button>
    </div>
  );

  const handleAnswer = (type: string) => {
    const newAnswers = { ...answers, [currentQuestion]: type };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, string>) => {
    const traits = Object.values(finalAnswers);
    const structuredCount = traits.filter(t => t === "Structured").length;
    const staticCount = traits.filter(t => t === "Static").length;

    const personalityType = `${structuredCount > traits.length/2 ? "Structured" : "Dynamic"}-${staticCount > traits.length/2 ? "Static" : "Dynamic"}`;
    setResult(personalityTypes[personalityType]);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <ResultSection result={result} />
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <p className="text-center mt-2 text-sm text-gray-600">
            {currentQuestion + 1} / {questions.length}
          </p>
        </div>

        <h2 className="text-xl font-semibold text-center mb-6 text-black">
          {questions[currentQuestion].text}
        </h2>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.type)}
              className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 transition-all"
            >
              <span className="text-gray-700">{option.text}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
