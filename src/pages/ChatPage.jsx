const ChatPage = ({ room , setRoom}) => {
  return (  
  <div className="chat-page">
    <header>
        <p>Deneme</p>
        <p>{room}</p>
        <button>Farkli Oda</button>
    </header>
    <main>Mesajlar</main>
    <form >
        <input required placeholder="mesajizini yaziniz" type="text" />
        <button>Gonder</button>
    </form>
  </div>)
};

export default ChatPage;
