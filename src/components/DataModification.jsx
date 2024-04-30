import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/DataModification.css';

const DataModification = () => {
  const [memberId, setMemberId] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const navigate = useNavigate();

  const handleMemberIdChange = (event) => {
    setMemberId(event.target.value);
  };

  const handleFileChange = (event) => {
    setCsvFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!memberId || !csvFile) {
      alert('メンバーIDとCSVファイルを選択してください。');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('csvFile', csvFile);

      const response = await axios.post(`http://localhost:3001/member/${memberId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const csvData = response.data.csv_data;

      await axios.patch(`http://localhost:3001/member/${memberId}`, { csv_data: csvData });

      alert('データが追加されました。');
      navigate(`/member/${memberId}`);
    } catch (error) {
      console.log('Error:', error);
      alert('データの追加に失敗しました。');
    }
  };

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="data-modification">
      <h2>データの修正</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="memberId">メンバーID</label>
          <input
            type="text"
            id="memberId"
            value={memberId}
            onChange={handleMemberIdChange}
            placeholder="メンバーIDを入力してください"
          />
        </div>
        <div className="form-group">
          <label htmlFor="csvFile">CSVファイル</label>
          <input
            type="file"
            id="csvFile"
            accept=".csv"
            onChange={handleFileChange}
          />
        </div>
        <div className="button-group">
          <button type="submit">データを追加</button>
          <button type="button" onClick={handleGoBack}>
            前画面に戻る
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataModification;