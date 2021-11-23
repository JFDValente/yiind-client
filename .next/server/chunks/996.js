"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getStaticPath)
/* harmony export */ });
const getStaticPath = name => {
  return `/img/${name}.png`;
};



/***/ }),

/***/ 406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(993);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const USER_TOKEN = 'user_token';
const cookieConfig = {
  maxAge: 3540
  /* 59 minutes */
  ,
  path: '/'
};

const setUserToken = userToken => {
  const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
  cookies.set(USER_TOKEN, userToken, cookieConfig);
};

const getUserToken = () => {
  const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
  return cookies.get(USER_TOKEN);
};

const clearUserToken = () => {
  const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
  cookies.remove(USER_TOKEN, {
    path: '/'
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  clearUserToken,
  getUserToken,
  setUserToken
});

/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Logged)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/users/index.js
var users = __webpack_require__(712);
// EXTERNAL MODULE: ./bosons/requests/user/index.js
var user = __webpack_require__(835);
// EXTERNAL MODULE: ./bosons/awaitTo/index.js
var awaitTo = __webpack_require__(746);
;// CONCATENATED MODULE: ./bosons/customHook/users/index.js






function useUser() {
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(async () => {
    const [userError, userResponse] = await (0,awaitTo/* default */.Z)(user/* default.getData */.Z.getData());

    if (userError) {
      console.log(`Error to retrieve user data: ${JSON.stringify(userError)}`);
    } else {
      dispatch((0,users/* setUserAction */.Z)(userResponse === null || userResponse === void 0 ? void 0 : userResponse.usuario[0]));
    }
  }, []);
}

const getUserState = () => {
  const user = (0,external_react_redux_.useSelector)(state => state.user);
  return user;
};


// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./organisms/NavigationMenu/Style.js

const Container = external_styled_components_default().div.withConfig({
  componentId: "sc-uxd7vk-0"
})(["position:absolute;display:flex;flex-direction:column;align-items:center;background-color:#000000;height:100vh;width:80%;", ";", "{position:initial;width:25%;}", "{position:initial;width:20%;}transform:translateX(0%);@keyframes notification{from{transform:translateX(-100%);opacity:0%;}to{transform:translateX(0%);opacity:100%}}animation-name:notification;animation-duration:0.3s;animation-timing-function:ease-out;"], ({
  theme: {
    spacing
  }
}) => `
    padding: ${spacing('large')} ${spacing('small')}
  `, ({
  theme: {
    breakpoints
  }
}) => breakpoints.up('md'), ({
  theme: {
    breakpoints
  }
}) => breakpoints.up('lg'));
const User = external_styled_components_default().p.withConfig({
  componentId: "sc-uxd7vk-1"
})(["font-weight:bold;width:100%;text-align:center;margin-bottom:40px;"]);
const NavigationItem = external_styled_components_default().p.withConfig({
  componentId: "sc-uxd7vk-2"
})(["cursor:pointer;width:100%;text-align:left;margin-bottom:16px;:hover{font-weight:bold;}"]);
/* harmony default export */ const Style = ({
  Container,
  NavigationItem,
  User
});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./organisms/NavigationMenu/index.js





const pages = [{
  label: 'Minha Conta',
  path: '/minha-conta'
}, {
  label: 'Minhas Idéias',
  path: '/minhas-ideias'
}, {
  label: 'Feed de Idéias',
  path: '/ideias'
}, {
  label: 'Lista de Interesses',
  path: '/interesses'
}];

const NavigationMenu = () => {
  const router = (0,router_.useRouter)();
  const loggedUser = getUserState();

  const navigateTo = path => {
    router.push(path);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Style.Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Style.User, {
      children: loggedUser.nome
    }), !!pages.length && pages.map(page => /*#__PURE__*/jsx_runtime_.jsx(Style.NavigationItem, {
      onClick: () => navigateTo(page.path),
      children: page.label
    }, page.label))]
  });
};

/* harmony default export */ const organisms_NavigationMenu = (NavigationMenu);
// EXTERNAL MODULE: ./bosons/assets/index.js
var assets = __webpack_require__(982);
// EXTERNAL MODULE: ./bosons/auth/index.js
var auth = __webpack_require__(406);
;// CONCATENATED MODULE: ./organisms/InfoSection/Style.js

const Style_Container = external_styled_components_default().div.withConfig({
  componentId: "sc-1rpavqo-0"
})(["display:flex;align-items:center;justify-content:space-between;"]);
const responsivity = (0,external_styled_components_.css)(["margin-left:", ";", "{margin-left:", ";}", "{margin-left:", ";}"], ({
  theme: {
    spacing
  }
}) => spacing('small'), ({
  theme: {
    breakpoints
  }
}) => breakpoints.up('md'), ({
  theme: {
    spacing
  }
}) => spacing('base'), ({
  theme: {
    breakpoints
  }
}) => breakpoints.up('lg'), ({
  theme: {
    spacing
  }
}) => spacing('large'));
const PublishIdeaButton = external_styled_components_default().button.withConfig({
  componentId: "sc-1rpavqo-1"
})(["", " border:solid #FF8888 1px;border-radius:10px;background-color:#CC0000;color:#FFFFFF;height:35px;width:110px;cursor:pointer;:hover{background-color:#EA1717;border:solid #FFFFFF 1px;}"], responsivity);
const NotificationContainer = external_styled_components_default().div.withConfig({
  componentId: "sc-1rpavqo-2"
})(["", " position:relative;display:flex;align-items:center;justify-content:center;height:25px;width:25px;border-radius:50px;background-color:#D1D1D1;cursor:pointer;"], responsivity);
const NotificationImg = external_styled_components_default().img.withConfig({
  componentId: "sc-1rpavqo-3"
})(["background-color:#D1D1D1;height:17px;width:15px;"]);
const ProfileContainer = external_styled_components_default().div.withConfig({
  componentId: "sc-1rpavqo-4"
})(["cursor:pointer;"]);
const ProfileImage = external_styled_components_default().img.withConfig({
  componentId: "sc-1rpavqo-5"
})(["", " position:relative;height:50px;width:50px;border-radius:50px;border:solid #FFFFFF 1px;background-color:#99BFDB;"], responsivity);
const SubMenuContainer = external_styled_components_default().div.withConfig({
  componentId: "sc-1rpavqo-6"
})(["position:absolute;right:16px;top:calc(50px + 24px);width:150px;display:flex;flex-direction:column;align-items:center;background-color:#DDDDDD;box-shadow:3px 3px 4px #999999;border-radius:8px;padding:8px;color:#000;"]);
const SubMenuItem = external_styled_components_default().div.withConfig({
  componentId: "sc-1rpavqo-7"
})(["display:flex;align-items:center;justify-content:center;width:100%;padding:8px;text-align:center;:hover{background-color:#ADADAD;}"]);
const LogoutIcon = external_styled_components_default().img.withConfig({
  componentId: "sc-1rpavqo-8"
})(["height:20px;width:20px;margin-right:4px;"]);
/* harmony default export */ const InfoSection_Style = ({
  Container: Style_Container,
  LogoutIcon,
  NotificationContainer,
  NotificationImg,
  ProfileContainer,
  ProfileImage,
  PublishIdeaButton,
  SubMenuContainer,
  SubMenuItem
});
;// CONCATENATED MODULE: ./organisms/InfoSection/index.js









const SubMenuProfile = () => {
  const router = (0,router_.useRouter)();

  const doLogout = () => {
    auth/* default.clearUserToken */.Z.clearUserToken();
    router.push('/');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(InfoSection_Style.SubMenuContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoSection_Style.SubMenuItem, {
      onClick: doLogout,
      children: [/*#__PURE__*/jsx_runtime_.jsx(InfoSection_Style.LogoutIcon, {
        src: (0,assets/* getStaticPath */.l)('logout_icon'),
        alt: "logout"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Logout"
      })]
    })
  });
};

const InfoSection = () => {
  const router = (0,router_.useRouter)();
  const {
    0: profileImg,
    1: setProfileImg
  } = (0,external_react_.useState)('');
  const {
    0: showSubMenuProfile,
    1: setShowSubMenuProfile
  } = (0,external_react_.useState)(false);
  const {
    0: showSubMenuNotification,
    1: setShowSubMenuNotification
  } = (0,external_react_.useState)(false);
  const loggedUser = getUserState();

  const toggleSubMenuProfile = () => setShowSubMenuProfile(!showSubMenuProfile);

  const toggleSubMenuNotification = () => setShowSubMenuNotification(!showSubMenuNotification);

  const loadProfileImage = () => {
    const srcProfileImg = loggedUser !== null && loggedUser !== void 0 && loggedUser.fotoUrl ? loggedUser === null || loggedUser === void 0 ? void 0 : loggedUser.fotoUrl : (0,assets/* getStaticPath */.l)('user_icon');
    setProfileImg(srcProfileImg);
  };

  (0,external_react_.useEffect)(() => {
    loadProfileImage();
  }, [loggedUser]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoSection_Style.Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(InfoSection_Style.PublishIdeaButton, {
      onClick: () => router.push('/publicar'),
      children: "Nova Id\xE9ia"
    }), /*#__PURE__*/jsx_runtime_.jsx(InfoSection_Style.NotificationContainer, {
      onClick: toggleSubMenuNotification,
      children: /*#__PURE__*/jsx_runtime_.jsx(InfoSection_Style.NotificationImg, {
        src: (0,assets/* getStaticPath */.l)('notification'),
        alt: "bell"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoSection_Style.ProfileContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(InfoSection_Style.ProfileImage, {
        src: profileImg,
        alt: "user",
        onClick: toggleSubMenuProfile
      }), !!showSubMenuProfile && /*#__PURE__*/jsx_runtime_.jsx(SubMenuProfile, {})]
    })]
  });
};

/* harmony default export */ const organisms_InfoSection = (/*#__PURE__*/external_react_default().memo(InfoSection));
;// CONCATENATED MODULE: ./atoms/MenuButton/Style.js

const MenuButton_Style_Container = external_styled_components_default().button.withConfig({
  componentId: "sc-1xm2msy-0"
})(["display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:", ";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:", ";}:nth-child(2){opacity:", ";transform:", ";}:nth-child(3){transform:", ";}}"], ({
  opened
}) => opened ? '#FFFFFF' : '#FFFFFF', ({
  opened
}) => opened ? 'rotate(45deg)' : 'rotate(0)', ({
  opened
}) => opened ? '0' : '1', ({
  opened
}) => opened ? 'translateX(20px)' : 'translateX(0)', ({
  opened
}) => opened ? 'rotate(-45deg)' : 'rotate(0)');
/* harmony default export */ const MenuButton_Style = ({
  Container: MenuButton_Style_Container
});
;// CONCATENATED MODULE: ./atoms/MenuButton/index.js





const MenuButton = props => {
  const {
    onClick
  } = props;
  const {
    0: opened,
    1: setOpened
  } = (0,external_react_.useState)(false);

  const toogleMenu = () => {
    onClick(!opened);
    setOpened(!opened);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuButton_Style.Container, {
    onClick: toogleMenu,
    opened: opened,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
  });
};

/* harmony default export */ const atoms_MenuButton = (MenuButton);
;// CONCATENATED MODULE: ./organisms/TopBar/Style.js

const TopBar_Style_Container = external_styled_components_default().div.withConfig({
  componentId: "sc-1mn953f-0"
})(["display:flex;justify-content:space-between;align-items:center;height:40px;width:100%;background-color:#000000;padding:", ";", "{padding:", ";}"], ({
  theme: {
    spacing
  }
}) => ` ${spacing('micro')} ${spacing('small')}`, ({
  theme: {
    breakpoints
  }
}) => breakpoints.up('md'), ({
  theme: {
    spacing
  }
}) => ` ${spacing('small')} ${spacing('small')}`);
/* harmony default export */ const TopBar_Style = ({
  Container: TopBar_Style_Container
});
;// CONCATENATED MODULE: ./organisms/TopBar/index.js






const TopBar = props => {
  const {
    toogleNavigationMenu
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TopBar_Style.Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(atoms_MenuButton, {
      onClick: toogleNavigationMenu
    }), /*#__PURE__*/jsx_runtime_.jsx(organisms_InfoSection, {})]
  });
};

/* harmony default export */ const organisms_TopBar = (TopBar);
;// CONCATENATED MODULE: ./templates/Logged/Style.js

const Content = external_styled_components_default().div.withConfig({
  componentId: "sc-1v5hnvo-0"
})(["display:flex;flex-direction:row;width:calc(100% + 32px);background-color:#23B5B5;"]);
/* harmony default export */ const Logged_Style = ({
  Content
});
;// CONCATENATED MODULE: ./templates/Logged/index.js











const LoggedTemplate = props => {
  const router = (0,router_.useRouter)();
  const {
    0: showNavigationMenu,
    1: setShowNavigationMenu
  } = (0,external_react_.useState)(false);
  const {
    children
  } = props;
  useUser();
  (0,external_react_.useEffect)(() => {
    if (!auth/* default.getUserToken */.Z.getUserToken()) {
      router.push('/');
      return;
    }
  }, []);

  const toogleNavigationMenu = () => {
    setShowNavigationMenu(!showNavigationMenu);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(organisms_TopBar, {
      toogleNavigationMenu: toogleNavigationMenu
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Logged_Style.Content, {
      children: [!!showNavigationMenu && /*#__PURE__*/jsx_runtime_.jsx(organisms_NavigationMenu, {}), children]
    })]
  });
};

/* harmony default export */ const Logged = (LoggedTemplate);

/***/ })

};
;