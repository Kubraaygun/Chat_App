import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebase/config";

const ChatPage = ({ room, setRoom }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    //collection referansini alma
    const messagesCol = collection(db, "messages");
    //kolleksiyona yeni dokuman ekle
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        name: "",
        id: "",
        photo: "",
      },
      createdAt: "",
    });
  };
  return (
    <div className="chat-page">
      <header>
        <p>Deneme</p>
        <p>{room}</p>
        <button>Farklı Oda</button>
      </header>
      <main>Mesajlar</main>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Mesajızını Yazınız" type="text" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
