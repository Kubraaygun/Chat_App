import { auth } from "../firebase/config";

const Message = ({ data }) => {
  // eger oturumu acik olan kisinin id'si mesaji
  //atan kisinin id'si ile eslesirse :
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  //id eslesmez ise :

  return (
    <div className="msg-other">
      <p className="user-info">
        <img src={data.author.photo} alt="profil" />
        <span>{data.author.name}</span>
      </p>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
