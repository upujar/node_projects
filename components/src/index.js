import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
              author="Utkarsh"
              timeAgo="Today at 1:00PM"
              avatar={faker.image.avatar()}
              comment="Nice One"/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
              author="Anki"
              timeAgo="Today at 4:00AM"
              avatar={faker.image.avatar()}
              comment="Great"/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
              author="Abhishek"
              timeAgo="Yesterday at 1:00PM"
              avatar={faker.image.avatar()}
              comment="Kya Baat"/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
              author="Mishti"
              timeAgo="Yesterday at 12:00PM"
              avatar={faker.image.avatar()}
              comment="....."/>
        </ApprovalCard>


      </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));