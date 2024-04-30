// MemberDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/member/${id}`);
        setMember(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMemberData();
  }, [id]);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>メンバー詳細</h2>
      <p>ID: {member.id}</p>
      <p>名前: {member.name}</p>
      {/* その他のメンバー情報を表示 */}
    </div>
  );
};

export default MemberDetails;