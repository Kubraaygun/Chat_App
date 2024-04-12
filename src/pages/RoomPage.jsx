const RoomPage = ({setRoom}) => {
  const handleSubmit=(e)=>{
    e.preventDefault()
const room=e.target[0].value;
setRoom(room.toUpperCase());
  }
  return ( 
  <form onSubmit={handleSubmit} className="room-page">
    <h1>Chat Odası</h1>
    <p>Hangi Odaya Gireceksiniz?</p>
    <input placeholder="ornek text" type="text" />
    <button type="submit">Odaya Gir</button>
    <button type="button">Odadan Çık</button>
  </form>)
};

export default RoomPage;
