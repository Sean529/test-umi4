import { showToast } from "@/utils";
import style from "./index.scss";
export default function HomePage() {
  return (
    <div>
      <div className="text-blue-600 text-[100px]">hello world</div>
      <div
        className={style.mapply}
        onClick={() => {
          showToast("hello world");
        }}
      >
        @apply
      </div>
    </div>
  );
}
