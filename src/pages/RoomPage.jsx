const RoomPage = ({setRoom}) => {
  const handleSubmit=(e)=>{
    e.preventDefault()
const room=e.target[0].value;
setRoom(room);
  }
  return <form onSubmit={handleSubmit} className="room-page">
    <h1>Chat Odasi</h1>
    <p>Hangi odaya gireceksiniz</p>
    <input placeholder="ornek text" type="text" />
    <button type="submit">Odaya Gir</button>
    <button type="button">Odadan Cik</button>
  </form>;
};

export default RoomPage;
