import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={css.card}>
    <img src={avatar} alt="Avatar" width="48" />
    <p className={css.cardTitle}>{name}</p>
    {isOnline ? (
      <p className={css.online}>Online</p>
    ) : (
      <p className={css.offline}>Offline</p>
    )}
  </div>
);

export default FriendListItem;
