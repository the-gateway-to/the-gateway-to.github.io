export class Utils {

    static daysDifference(date1: Date | string = new Date(), date2: Date | string = new Date()): number {
        const diffTime: number = Utils.toDate(date2).getTime() - Utils.toDate(date1).getTime();
        // const diffTime: number = Math.abs(Utils.toDate(date2).getTime() - Utils.toDate(date1).getTime());
        const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    static toDate(date: string | Date): Date {
        if (date instanceof Date) {
            return date;
        }
        return new Date(date);
    }

    static toDateOrDefault(defaultDate: string | Date, date?: string | Date): Date {
        if (date){
            try {
                return Utils.toDate(date);
            } catch (err) {
                console.error(`Invalid date [${date}]`, err);
            }
        }
        return Utils.toDate(defaultDate);
    }

    static getRandomNumberArray(length: number, chunkSize: number): number[][] {
        return [...Array(length).keys()].slice(1).sort(() => Math.random() - 0.5).reduce((agg: number[][], cur: number, idx: number) => {
            if (idx % chunkSize === 0) {
                agg = [...agg, []]
            }
            agg[agg.length - 1].push(cur);
            return agg;
        }, []);
    }

    static getFirst(val: any): any {
        if (val) {
            return (val instanceof Array) ? val[0] : val;
        }
        return undefined;
    }

    static humanReadableDay(day?: number): string {
        if (day == null) return '';
        switch (day) {
            case 1:
            case 21:
            case 31: return `${day}st`;
            case 2:
            case 22: return `${day}nd`;
            case 3:
            case 23: return `${day}rd`
            default: return `${day}th`;
        }
    }

}