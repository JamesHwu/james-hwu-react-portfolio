import { 
faTrash, 
faSignOutAlt, 
faEdit, 
faAdjust, 
faSpinner, 
faPhone,
faEnvelope,
faMapMarkedAlt,
faAlignLeft,
faLock 
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
library.add(
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faAdjust, 
    faAlignLeft,
    faSpinner, 
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
    );
}

export default Icons;