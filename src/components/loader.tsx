// Loader.jsx

import style from "./styles/loader.module.scss";

const Loader = () => {
  return (
    <div className={style.loaderWraper}>
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
