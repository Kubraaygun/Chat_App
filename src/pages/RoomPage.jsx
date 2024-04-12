const RoomPage = () => {
  return <form className="room-page">
    <h1>Chat Odasi</h1>
    <p>Hangi odaya gireceksiniz</p>
    <input placeholder="ornek text" type="text" />
    <button type="submit">Odaya Gir</button>
    <button type="button">Odadan Cik</button>
  </form>;
};

export default RoomPage;
