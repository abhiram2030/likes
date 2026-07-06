import { useState } from "react"; 
export default function App() { 
const [likes, setLikes] = useState(0); 
return ( 
<div style={styles.card}> 
<p style={styles.count}>Likes: {likes}</p> 
{/* TODO 1 (parent): pass a function as `onLike` that increases likes by 1 */} 
<LikeButton  onLike={()=>{setLikes(likes+1)}}/> 
</div> 
); 
} 
// TODO 2 (child): receive `onLike` and call it when the button is clicked. 
function LikeButton({onLike}) { 
return <button onClick={onLike} style={styles.btn}>
👍
 Like</button>; 
} 
const styles = { 
card: { fontFamily: "system-ui", maxWidth: 260, margin: "40px auto", padding: 24, 
borderRadius: 16, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,.08)" }, 
count: { fontSize: 18, color: "#333" }, 
btn: { fontSize: 15, padding: "10px 18px", border: "none", borderRadius: 8, 
background: "#ff4757", color: "white", cursor: "pointer" }, 
}; 
