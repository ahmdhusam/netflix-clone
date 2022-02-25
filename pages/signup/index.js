import MainSign from "../../components/Sign";

const SignUpPage = () => {
    return (
        <MainSign
            btnSubValue="Up"
            redirectTo="In"
            msgBeforLink="Already have an account?"
            insertInputName={true}
        />
    );
};

export default SignUpPage;

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
