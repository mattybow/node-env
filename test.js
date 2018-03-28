import equals from 'deep-equal';

const PASSED = 'PASSED';
const FAILED = 'FAILED';

class Timer {
  constructor(){
    this.start = process.hrtime();
  }
  end(){
    const self = this;
    const endTime = process.hrtime(self.start);
    console.info("Execution time (hr): %ds %dms", endTime[0], endTime[1]/1000000);
  }
}

function printDivider(){
  console.info('-----------------------------------------------');
}

export default function test(f, {input, expectedOutput}, index){
  console.info(`Running Test ${index}`);
  console.info(`input: ${input}`);
  printDivider();
  const timer = new Timer();
  const output = f(...input);
  const det = equals(output, expectedOutput) ? PASSED : FAILED;
  printDivider();
  timer.end();
  console.log(`Test ${index} ${det}`);
  console.info(`expectedOutput: ${expectedOutput}`);
  console.info(`output: ${output}`);
}
