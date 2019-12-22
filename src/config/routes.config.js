import { 
    HomeComponent, 
    WorkComponent, 
    SkillsComponent,
} from "../component";

const rootRouteConfig = [

    { path: '/home', component: HomeComponent, authGuard: false },
    { path: '/work', component: WorkComponent, authGuard: false },
    { path: '/skills', component: SkillsComponent, authGuard: false },
    { path: '/', exact: true, component: HomeComponent, authGuard: false },
    // { path: '', exact: true, component: HomeComponent, authGuard: false },
    { path: '**', redirect: true,  redirectTO: '/home', authGuard: false },

]

export {
    rootRouteConfig,
}