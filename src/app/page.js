"use client"
import styles from "./page.module.css";

export default function Home() {
  async function hadle(){
    const res =  await fetch("/api/add",{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({data:"Test Data"})})

    console.log(await res.json());
  }
  
  return (
    <main className={styles.main}>
        <button onClick={hadle}>Bultt</button>
    </main>
  );
}
