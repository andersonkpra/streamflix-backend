// src/models/Playback.ts
import mongoose, { Schema } from 'mongoose';

const playbackSchema = new Schema({
  userId: { type: String, required: true },
  movieId: { type: String, required: true }, // <── aquí lo cambiamos a String
  position: { type: Number, default: 0 },
  state: { 
    type: String, 
    enum: ['playing', 'paused', 'stopped'], 
    default: 'stopped' 
  },
}, { timestamps: true });

export default mongoose.model('Playback', playbackSchema);
