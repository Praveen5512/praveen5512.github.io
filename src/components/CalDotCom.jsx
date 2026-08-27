import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalDotCom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  
};
  