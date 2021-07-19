import { 
faTrash, 
faSignOutAlt, 
faEdit, 
faAdjust, 
faSpinner, 
faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
library.add(faTrash, faSignOutAlt, faEdit, faAdjust, faAlignLeft);
}

export default Icons;