import {
    Button,
    Form,
    Field,
    CellGroup,
    Sidebar,
    SidebarItem,
    Grid,
    GridItem
  } from "vant";
  
  
  export const load_components = (app) => {
    app.use(Button);
    app.use(Form);
    app.use(Field);
    app.use(CellGroup);
    app.use(Sidebar);
    app.use(SidebarItem);
    app.use(Grid);
    app.use(GridItem);
  };
  