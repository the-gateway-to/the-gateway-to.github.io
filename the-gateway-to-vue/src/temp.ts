import { config } from './components/advent/CalendarConfig';

class Temp {
    static process() {
        const data = `1/3.png
1/4.png
1/5.png
1/6.png
1/7.png
1/8.png
2/10.png
2/11.png
2/12.png
2/13.png
2/9.png
3/14.png
3/15.png
3/16.png
3/17.png
3/18.png
4/19.1.png
4/19.2.png
4/21.png
4/22.png
4/23.png
4/24.png
5/25.png
5/26.png
5/27.png
5/28.png
5/29.1.png
5/29.2.png
6/31.png
6/33.1.png
6/33.2.png
6/35.png
6/36.png
7/37.1.png
7/37.2.png
7/39.png
7/40.png
7/41.png
8/42.png
8/43.png
8/44.png
8/45.png
8/46.png
9/48.png
9/49.png
9/50.png
9/51.png
9/52.png
10/53.1.png
10/53.2.png
10/55.png
10/56.png
10/57.png
10/58.png
11/59.png
11/60.png
11/61.1.png
11/61.2.png
11/63.png
11/64.png
12/65.png
12/66.png
12/67.png
12/68.png
12/69.png
13/70.png
13/71.png
13/72.png
13/73.png
13/74.png
14/75.png
14/76.png
14/77.png
14/79.png
14/80.png
15/81.png
15/82.png
15/83.png
15/84.png
15/85.png
15/86.png
16/87.1.png
16/87.2.png
16/89.png
16/90.png
16/91.png
16/92.png
17/93.png
17/94.1.png
17/94.2.png
17/96.png
17/97.png
17/98.png
18/100.png
18/101.png
18/102.png
18/103.png
18/104.png
18/99.png
19/106.png
19/107.png
19/108.png
19/109.png
19/110.png
19/111.png
20/112.png
20/113.1.png
20/113.2.png
20/115.png
20/116.png
20/117.png
21/118.png
21/119.png
21/120.png
21/121.png
21/122.png
22/123.png
22/124.png
22/126.1.png
22/126.2.png
22/128.png
23/129.png
23/130.png
23/131.png
23/132.png
23/133.png
24/134.png
24/135.png
24/136.png
24/137.1.png
24/137.2.png
24/139.png
24/140.png
24/141.png`;

        const d1 = data.split(/[\r\n]+/g);

        const d2 = d1.reduce((agg: any, cur) => {
            const parts = cur.split('/');
            const day = Number(parts[0]);
            agg[day] = agg[day] || [];
            agg[day].push(`img-path/${parts[1]}`);
            return agg;
        }, {})

        Object.keys(d2).forEach((key) => {
            config.day[key].images = d2[key];
        });

        console.log(JSON.stringify(config, null, 2));
    }
}

(async () => {
    Temp.process();
})();