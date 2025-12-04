
class Logger {

    static log(context: string, message: string): void {
        console.log(`${context} :: ${message}`);
    }

    static error(context: string, message: string, error?: Error): void {
        console.error(`${context} :: ${message}`, error);
    }

}

export default(Logger)