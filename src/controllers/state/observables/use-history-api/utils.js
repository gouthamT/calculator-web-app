export const formatMessage = (arr = []) => {
    return arr.reduce((message, current) => {

        if (message.drillDown === null) {
            message.drillDown = `${current.next}`;
        }

        if (current.operation && current.next) {
          message.drillDown = `${message.drillDown} ${current.operation} ${current.next}`;
        }

        if(current.next === null) {
          message.total = `${current.total}`;
        }

        return message;
    }, { drillDown: null , total: "" });
}