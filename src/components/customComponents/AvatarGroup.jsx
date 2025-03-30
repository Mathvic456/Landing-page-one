import "./AvatarGroup.css";

const avatars = [
  "avatar1.jpg",
  "avatar2.jpg",
  "avatar3.jpg",
  "avatar4.jpg",
  "avatar5.jpg",
  "avatar6.jpg",
];

export default function AvatarGroup() {
  return (
    <div className="avatar-group">
      {avatars.map((avatar, index) => (
        <img key={index} src={avatar} alt="avatar" className="avatar" />
      ))}
      <div className="avatar more">+5k</div>
    </div>
  );
}
