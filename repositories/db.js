import pg from "pg";

async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: "postgres://yzblxdsm:jKUA7OYA4WbRLJDLKZI-mAXiP70ROqyn@batyr.db.elephantsql.com/yzblxdsm"
    });

    global.connection = pool;

    return pool.connect();
};

export {
    connect
};