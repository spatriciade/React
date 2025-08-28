import './ItemIcon.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemIcon({ icons = [] }) {
  if (!icons.length) return null;

  return (
    <div className="item-icon fa-4x flex-20 flex-center">
      <span className="fa-layers fa-fw fa-xl">
        <FontAwesomeIcon icons={icons[0]} className="light-bill" />
        {icons[1] && (
          <FontAwesomeIcon
            icon={icons[1]}
            inverse
            transform="shrink-8"
            className="bill"
          />
        )}
      </span>
    </div>
  );
}

export default ItemIcon;
