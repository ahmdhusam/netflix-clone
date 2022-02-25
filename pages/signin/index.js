import MainSign from "../../components/Sign";

const SignInPage = () => {
    return (
        <MainSign
            btnSubValue="In"
            redirectTo="Up"
            msgBeforLink="New to Netflix?"
        />
    );
};

export default SignInPage;

export const getServerSideProps = async ({ req, res }) => {
    const { fakeAuth } = req.cookies;

    if (fakeAuth) {
        return {
            redirect: {
                destination: "/home",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
