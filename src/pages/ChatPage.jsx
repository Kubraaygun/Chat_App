import { collection, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { auth, db } from "./../firebase/config";
import { useEffect } from "react";

const ChatPage = ({ room, setRoom }) => {
  console.log(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    //collection referansini alma
    const messagesCol = collection(db, "messages");
    //kolleksiyona yeni dokuman ekle
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

//bu odada gonderilen mesajlari anlik olarak getir

useEffect(()=>{
  const messagesCol = collection(db, "messages");
  //anlik olarak bir koleksiyondaki degisimleri izler
  //kolleksiyon her destiginde verdigimiz fonksiyone kolleksiyondaki dokumanlari parametre olarak gonderir
  onSnapshot(messagesCol,(snapshot)=>{
console.log("SNAPSHOT",snapshot)
  })
},[])





  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
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
