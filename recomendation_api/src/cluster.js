import cluster from 'cluster'
import { cpus } from 'os'

 // If we're on the master thread start the forks.

 if (cluster.isPrimary === true) { 
  // .isPrimary with node v16.0.0 or above
  // .isMaster (depreciated) with older version
  const CPUS = cpus();
  CPUS.forEach(() => cluster.fork());
} else {
  // If we're not on the master thread start the server.
  require("./server.js");
}