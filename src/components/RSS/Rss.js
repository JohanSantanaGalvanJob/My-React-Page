import { useEffect } from "react";
import rss from '../../assets/Rss.xml';

const Rss = () => {
  useEffect((()=> {

    window.open(rss,'_self')

  }))
};

export default Rss;
