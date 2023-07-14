import "./PeopleSayBlock.css";
import Title from "../../components/Title/Title";
import PeopleCommentItems from "../../components/PeopleCommentItems/PeopleCommentItems";

const PeopleSayBlock = () => {
  return (
    <div className="PeopleSayBlock" id="peoplesSay">
      <Title
        title1="This is what people say about me"
        title2="Here are a few lines from people who I have worked with over the past 8+ years in my design career."
        btnText="See all testimonials"
      />
      <PeopleCommentItems />
    </div>
  );
};

export default PeopleSayBlock;
