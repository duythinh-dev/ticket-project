import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AppBar from "@material-ui/core/AppBar";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import Avatar from "@material-ui/core/Avatar";
// import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Backdrop from "@material-ui/core/Backdrop";
import Badge from "@material-ui/core/Badge";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import Collapse from "@material-ui/core/Collapse";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import Fade from "@material-ui/core/Fade";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MobileStepper from "@material-ui/core/MobileStepper";
import Modal from "@material-ui/core/Modal";
import NoSsr from "@material-ui/core/NoSsr";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// import Pagination from "@material-ui/lab/Pagination";
// import PaginationItem from "@material-ui/lab/PaginationItem";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import Popper from "@material-ui/core/Popper";
import Portal from "@material-ui/core/Portal";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
// import Rating from "@material-ui/lab/Rating";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Select from "@material-ui/core/Select";
// import Skeleton from "@material-ui/lab/Skeleton";
import Slide from "@material-ui/core/Slide";
import Slider from "@material-ui/core/Slider";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// import SpeedDial from "@material-ui/lab/SpeedDial";
// import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
// import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepConnector from "@material-ui/core/StepConnector";
import StepContent from "@material-ui/core/StepContent";
import StepIcon from "@material-ui/core/StepIcon";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import SvgIcon from "@material-ui/core/SvgIcon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Switch from "@material-ui/core/Switch";
import Tab from "@material-ui/core/Tab";
import TabScrollButton from "@material-ui/core/TabScrollButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import ToggleButton from "@material-ui/lab/ToggleButton";
// import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";

import { withStyles, makeStyles } from "@material-ui/core";

const Mui = {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  //   Autocomplete,
  Avatar,
  //   AvatarGroup,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  CircularProgress,
  Collapse,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Divider,
  Drawer,
  Fab,
  Fade,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Icon,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Link,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  MobileStepper,
  Modal,
  NoSsr,
  OutlinedInput,
  //   Pagination,
  //   PaginationItem,
  Paper,
  Popover,
  Popper,
  Portal,
  Radio,
  RadioGroup,
  //   Rating,
  ScopedCssBaseline,
  Select,
  //   Skeleton,
  Slide,
  Slider,
  Snackbar,
  SnackbarContent,
  //   SpeedDial,
  //   SpeedDialAction,
  //   SpeedDialIcon,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  SvgIcon,
  SwipeableDrawer,
  Switch,
  Tab,
  TabScrollButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TextField,
  TextareaAutosize,
  //   ToggleButton,
  //   ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  Hidden,

  // utile Style
  withStyles,
  makeStyles,
};

export default Mui;
