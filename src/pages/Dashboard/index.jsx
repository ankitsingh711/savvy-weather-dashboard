import Dashboard from "../../components/Dashboard";

const Page = () => {
    return(
        <div className="dasboard_page_main_container">
            <div className="dashboard_page_heading">
                <h1> Weather Forecast </h1>
            </div>
            <div className="dashboard_form__container">
                <Dashboard />
            </div>
        </div>
    )
}

export default Page;