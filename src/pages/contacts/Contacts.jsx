import Clock from "../../components/closk/Clock";
import "./contacts.scss";

const Contacts = () => {
  return (
    <>
      <h1 className="title">Мої соціальні мережі</h1>
      <a
        href="https://www.facebook.com/profile.php?id=100008957984404"
        target={"_blank"}
        rel="noreferrer noopener"
      >
        facebook
      </a>
      <Clock date={new Date()} />
    </>
  );
};

export default Contacts;
