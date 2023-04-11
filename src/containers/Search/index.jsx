import React from "react";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import styles from "./search.module.css";

export default function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target.search.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inner}>
        <div className={styles.label}>
          some very long text which we will replace later...
        </div>
        <div className={styles.row}>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="insert playlist link here"
          />
          <Button bg="#33312B" color="white" type="submit">
            Go
          </Button>
        </div>
      </div>
    </form>
  );
}
