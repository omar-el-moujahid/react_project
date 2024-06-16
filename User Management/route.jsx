import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Layout from "./pages/layout";
import Add_User from "./pages/Add_User";
import Users_Liste from "./pages/Users_Liste";
import PageNotFound from "../../router/page/Pagenotfound";

export default function User_Management_route(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Users_Liste></Users_Liste>} />
                    <Route path="Add_User" element={<Add_User></Add_User>} />
                    <Route path='*' element={<PageNotFound></PageNotFound>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}