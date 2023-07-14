import { peopleComments } from "../../data/peopleComments";
import "./PeopleCommentItems.css";

const PeopleCommentItems = () => {
  return (
    <div className="column column-peoples">
      {peopleComments.map((item, index) => (
        <div className="peopleCommentItem" key={index}>
          <img src={item.src} alt="people-comment" className="comment-image" />
          <div className="comment-content">
            <span className="comment-1">{item.comment}</span>
            <div className="comment-autor">
              <span className="autor-name">{item.name}</span>
              <span className="autor-company">{item.company}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleCommentItems;
