import React from 'react';
import './styles.css';



const App = () => {
  return (
    <>
      <header>
        <nav>
          <a href="#home">首页</a>
          <a href="#about">关于我们</a>
          <a href="#token">代币信息</a>
          <a href="#airdrop">空投活动</a>
          <a href="#download">应用下载</a>
          <a href="#contact">联系我们</a>
        </nav>
      </header>

      <main>
        <section id="home" className="banner">
          <div className="banner-content">
            <h1 className="animate__animated animate__fadeInDown">Welcome to HYUT</h1>
            <p className="animate__animated animate__fadeInUp">基于 Solana 的下一代校园数字资产</p>
            <a href="#about" className="button floating">探索未来</a>
          </div>
        </section>

        <section id="about">
          <h2>关于我们</h2>
          <p style={{ textAlign: 'center', color: 'var(--light)', marginBottom: '2rem' }}>
            Hanyang Univ Token（HYUT）是一种基于 Solana 区块链的创新型数字资产，<br />
            致力于推动汉阳大学区块链技术的发展与应用。
          </p>
          <div className="team">
            <div className="team-member">
              <img src="/src/ceo.jpg" alt="成员1" />
              <h4>Shawn</h4>
              <p>技术负责人</p>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/180/180" alt="成员2" />
              <h4>Shawn</h4>
              <p>产品总监</p>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/180/180" alt="成员3" />
              <h4>Shawn</h4>
              <p>运营总监</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;