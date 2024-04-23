import React from 'react';

const Publications = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Publications</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contrastive Learning for API Aspect Analysis</h2>
            <p>GM Shahariar, Tahmid Hasan, Anindya Iqbal, Gias Uddin</p>
            <p>38th IEEE/ACM International Conference on Automated Software Engineering (ASE 2023)</p>
            <a href="#" className="text-blue-500">PDF Code</a>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">CrossSum: Beyond English-Centric Cross-Lingual Abstractive Text Summarization for 1500+ Language Pairs</h2>
            <p>Abhik Bhattacharjee, Tahmid Hasan, Wasi Uddin Ahmad, Yuan-Fang Li, Yong-bin Kang, Rifat Shahriyar</p>
            <p>Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics: ACL 2023</p>
            <a href="#" className="text-blue-500">PDF Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
