import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/member');
        setMembers(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMemberClick = (memberId) => {
    navigate(`/member/${memberId}`);
  };

  const handleDataModificationClick = () => {
    navigate('/dashboard/datamodification');
  };


  return (
    <div className="dashboard">
      <div className="tabbar">
        <div
          className={`tabbar-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleTabClick('dashboard')}
        >
          ダッシュボード
        </div>
        <div
          className={`tabbar-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          プロフィール
        </div>
        <div
          className={`tabbar-item ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => handleTabClick('data')}
        >
          データの登録・修正
        </div>
        <div
          className={`tabbar-item ${activeTab === 'analysis' ? 'active' : ''}`}
          onClick={() => handleTabClick('analysis')}
        >
          分析
        </div>
        <div
          className={`tabbar-item ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => handleTabClick('settings')}
        >
          設定
        </div>
        <div
          className={`tabbar-item ${activeTab === 'homeback' ? 'active' : ''}`}
          onClick={() => handleTabClick('homeback')}
        >
          ログイン画面に戻る
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'dashboard' && (
          <>
            <div className="member-grid">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="member-card"
                  onClick={() => handleMemberClick(member.id)}
                >
                  <h3 className="member-name">{member.name}</h3>
                  <p className="condition-index">
                    コンディション指数: {member.condition_index} / 100
                  </p>
                  <div className="member-details">
                    <p>体重: {member.weight}kg</p>
                    <p>BMI指数: {member.bmi}</p>
                    <p>腹囲の質: {member.body_fat_percentage}%</p>
                    <p>筋肉量: {member.muscle_mass}kg</p>
                    <p>基礎代謝: {member.basal_metabolic_rate}kcal</p>
                    <p>運動器の痛み: {member.exercise_intensity}</p>
                    <p>運動時間: {member.exercise_time}分</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === 'profile' && (
          <div>
            <h1>プロフィール</h1>
            {/* プロフィールの内容を追加 */}
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h1>設定</h1>
            {/* 設定の内容を追加 */}
          </div>
        )}
        {activeTab === 'data' && (
          <div>
            <h1>データの登録・修正</h1>
            <button onClick={handleDataModificationClick}>修正</button>
          </div>
        )}
        {activeTab === 'analysis' && (
          <div>
            <h1>分析</h1>
            {/* 分析の内容を追加 */}
          </div>
        )}
        {activeTab === 'homeback' && (
          <div>
            <h1>ログイン画面に戻る</h1>
            <button onClick={handleHomeClick}>戻る</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;